export type ProjectTasksConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksConfigStateMachine {
  private allowedTransitions: Record<ProjectTasksConfigState, ProjectTasksConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksConfigState, to: ProjectTasksConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksConfigState, to: ProjectTasksConfigState): ProjectTasksConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksConfig: " + from + " -> " + to);
    }
    return to;
  }
}
