/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CustomerService } from "../customer.service";
import { Public } from "../../decorators/public.decorator";
import { CustomerCreateInput } from "./CustomerCreateInput";
import { CustomerWhereInput } from "./CustomerWhereInput";
import { CustomerWhereUniqueInput } from "./CustomerWhereUniqueInput";
import { CustomerFindManyArgs } from "./CustomerFindManyArgs";
import { CustomerUpdateInput } from "./CustomerUpdateInput";
import { Customer } from "./Customer";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";

export class CustomerControllerBase {
  constructor(protected readonly service: CustomerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Customer })
  async create(@common.Body() data: CustomerCreateInput): Promise<Customer> {
    return await this.service.create({
      data: {
        ...data,

        organization: data.organization
          ? {
              connect: data.organization,
            }
          : undefined,

        vipOrganization: data.vipOrganization
          ? {
              connect: data.vipOrganization,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        firstName: true,
        lastName: true,
        isVip: true,
        birthData: true,
        averageSale: true,
        favoriteNumber: true,
        geoLocation: true,
        comments: true,
        favoriteColors: true,
        customerType: true,

        organization: {
          select: {
            id: true,
          },
        },

        vipOrganization: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Customer] })
  @ApiNestedQuery(CustomerFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Customer[]> {
    const args = plainToClass(CustomerFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        firstName: true,
        lastName: true,
        isVip: true,
        birthData: true,
        averageSale: true,
        favoriteNumber: true,
        geoLocation: true,
        comments: true,
        favoriteColors: true,
        customerType: true,

        organization: {
          select: {
            id: true,
          },
        },

        vipOrganization: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Customer | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        firstName: true,
        lastName: true,
        isVip: true,
        birthData: true,
        averageSale: true,
        favoriteNumber: true,
        geoLocation: true,
        comments: true,
        favoriteColors: true,
        customerType: true,

        organization: {
          select: {
            id: true,
          },
        },

        vipOrganization: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() data: CustomerUpdateInput
  ): Promise<Customer | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          organization: data.organization
            ? {
                connect: data.organization,
              }
            : undefined,

          vipOrganization: data.vipOrganization
            ? {
                connect: data.vipOrganization,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          email: true,
          firstName: true,
          lastName: true,
          isVip: true,
          birthData: true,
          averageSale: true,
          favoriteNumber: true,
          geoLocation: true,
          comments: true,
          favoriteColors: true,
          customerType: true,

          organization: {
            select: {
              id: true,
            },
          },

          vipOrganization: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Customer | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          email: true,
          firstName: true,
          lastName: true,
          isVip: true,
          birthData: true,
          averageSale: true,
          favoriteNumber: true,
          geoLocation: true,
          comments: true,
          favoriteColors: true,
          customerType: true,

          organization: {
            select: {
              id: true,
            },
          },

          vipOrganization: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @common.Get("/:id/orders")
  @ApiNestedQuery(OrderFindManyArgs)
  async findManyOrders(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Order[]> {
    const query = plainToClass(OrderFindManyArgs, request.query);
    const results = await this.service.findOrders(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        status: true,
        label: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/orders")
  async connectOrders(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/orders")
  async updateOrders(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/orders")
  async disconnectOrders(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
