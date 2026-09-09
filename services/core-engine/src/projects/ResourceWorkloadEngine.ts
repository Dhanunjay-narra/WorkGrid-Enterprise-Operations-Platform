import { UUID } from '@nexora/types';

export interface ResourceAllocation {
  userId: UUID;
  maxWeeklyCapacityHours: number;
  assignedTasks: { taskId: UUID; estimatedHours: number; deadlineWeek: number }[];
}

export class ResourceWorkloadEngine {
  public evaluateOverload(resource: ResourceAllocation, targetWeek: number): { totalAssignedHours: number; isOverallocated: boolean; utilizationRatePercent: number } {
    const weeklyHours = resource.assignedTasks
      .filter(t => t.deadlineWeek === targetWeek)
      .reduce((sum, t) => sum + t.estimatedHours, 0);

    const isOverallocated = weeklyHours > resource.maxWeeklyCapacityHours;
    const utilizationRatePercent = resource.maxWeeklyCapacityHours > 0
      ? Math.round((weeklyHours / resource.maxWeeklyCapacityHours) * 100)
      : 0;

    return {
      totalAssignedHours: weeklyHours,
      isOverallocated,
      utilizationRatePercent
    };
  }
}
