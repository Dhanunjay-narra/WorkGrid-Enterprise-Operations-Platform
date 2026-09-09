export type ProjectTasksThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksThresholdStateMachine {
  private allowedTransitions: Record<ProjectTasksThresholdState, ProjectTasksThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksThresholdState, to: ProjectTasksThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksThresholdState, to: ProjectTasksThresholdState): ProjectTasksThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
