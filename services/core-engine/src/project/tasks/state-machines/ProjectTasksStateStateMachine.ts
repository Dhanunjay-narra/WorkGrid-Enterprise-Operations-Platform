export type ProjectTasksStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksStateStateMachine {
  private allowedTransitions: Record<ProjectTasksStateState, ProjectTasksStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksStateState, to: ProjectTasksStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksStateState, to: ProjectTasksStateState): ProjectTasksStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksState: " + from + " -> " + to);
    }
    return to;
  }
}
