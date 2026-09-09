export type ProjectTasksEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksEventStateMachine {
  private allowedTransitions: Record<ProjectTasksEventState, ProjectTasksEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksEventState, to: ProjectTasksEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksEventState, to: ProjectTasksEventState): ProjectTasksEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksEvent: " + from + " -> " + to);
    }
    return to;
  }
}
