import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { graph, status_graph } from './graph';
@Injectable()
export class AppService {
  getStatuses(): any {
    return graph;
  }
  statusService(createStatusDto: CreateStatusDto): any {
    const { transition, bulk_statuses, status } = createStatusDto;
    const new_transition = transition.join('').toUpperCase();
    if (new_transition && new_transition in graph) {
      const statuses = graph[new_transition];
      const src = statuses[statuses.length - 1];
      let next_status = 0;
      for (const neighbor of status_graph[src]) {
        next_status = neighbor;
      }
      return { status: next_status };
    }
  }
}
