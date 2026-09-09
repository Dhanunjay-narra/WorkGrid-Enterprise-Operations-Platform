export type ProjectCapacityTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectCapacityTaskStateMachine {
  private allowedTransitions: Record<ProjectCapacityTaskState, ProjectCapacityTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectCapacityTaskState, to: ProjectCapacityTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectCapacityTaskState, to: ProjectCapacityTaskState): ProjectCapacityTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectCapacityTask: " + from + " -> " + to);
    }
    return to;
  }
}
