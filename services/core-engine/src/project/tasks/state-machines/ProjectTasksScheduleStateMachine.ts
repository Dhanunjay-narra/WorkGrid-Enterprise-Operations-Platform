export type ProjectTasksScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksScheduleStateMachine {
  private allowedTransitions: Record<ProjectTasksScheduleState, ProjectTasksScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksScheduleState, to: ProjectTasksScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksScheduleState, to: ProjectTasksScheduleState): ProjectTasksScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
