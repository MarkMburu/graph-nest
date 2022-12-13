import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { graph, status_graph, graph_transition } from './graph';
@Injectable()
export class AppService {
  statusService(createStatusDto: CreateStatusDto): any {
    const { transition, bulk_statuses } = createStatusDto;
    const new_transition = transition.join('').toUpperCase();
    if (new_transition && new_transition in graph) {
      const statuses = graph[new_transition];
      const src = statuses[statuses.length - 1];
      let next_status = 0;
      const next_transition = [];
      const next_bulk_statuses = [];
      for (const neighbor of status_graph[src]) {
        next_status = neighbor;
      }
      for (const neighbor of graph_transition[next_status]) {
        next_transition.push(neighbor);
      }
      for (const neighbor of graph[next_transition[0]]) {
        console.log(neighbor);
        next_bulk_statuses.push(neighbor);
      }
      return {
        next_status: next_status,
        next_transition: next_transition[0],
        next_bulk_statuses,
      };
    }
    return new BadRequestException('Transition not found');
  }
}
