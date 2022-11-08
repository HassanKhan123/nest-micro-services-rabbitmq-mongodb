import { Inject, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { CreateOrderRequest } from './dto/create-order.request';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async createOrder(request: CreateOrderRequest) {
    // const session = await this.ordersRepository.startTransaction();
    try {
      const order = await this.ordersRepository.create(request);
      // await session.commitTransaction();
      return order;
    } catch (err) {
      // await session.abortTransaction();
      throw err;
    }
  }

  async getOrders() {
    return this.ordersRepository.find({});
  }
}
