import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ProfileController } from "../profile.controller";
import { ProfileService } from "../profile.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: 42,
  createdIn: new Date(),
  createdAt: new Date(),
  updatedIn: new Date(),
  updatedAt: new Date(),
  email: "exampleEmail",
};
const CREATE_RESULT = {
  id: 42,
  createdIn: new Date(),
  createdAt: new Date(),
  updatedIn: new Date(),
  updatedAt: new Date(),
  email: "exampleEmail",
};
const FIND_MANY_RESULT = [
  {
    id: 42,
    createdIn: new Date(),
    createdAt: new Date(),
    updatedIn: new Date(),
    updatedAt: new Date(),
    email: "exampleEmail",
  },
];
const FIND_ONE_RESULT = {
  id: 42,
  createdIn: new Date(),
  createdAt: new Date(),
  updatedIn: new Date(),
  updatedAt: new Date(),
  email: "exampleEmail",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Profile", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ProfileService,
          useValue: service,
        },
      ],
      controllers: [ProfileController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /profiles", async () => {
    await request(app.getHttpServer())
      .post("/profiles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdIn: CREATE_RESULT.createdIn.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedIn: CREATE_RESULT.updatedIn.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /profiles", async () => {
    await request(app.getHttpServer())
      .get("/profiles")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdIn: FIND_MANY_RESULT[0].createdIn.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedIn: FIND_MANY_RESULT[0].updatedIn.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /profiles/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/profiles"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /profiles/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/profiles"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdIn: FIND_ONE_RESULT.createdIn.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedIn: FIND_ONE_RESULT.updatedIn.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /profiles existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/profiles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdIn: CREATE_RESULT.createdIn.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedIn: CREATE_RESULT.updatedIn.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/profiles")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
