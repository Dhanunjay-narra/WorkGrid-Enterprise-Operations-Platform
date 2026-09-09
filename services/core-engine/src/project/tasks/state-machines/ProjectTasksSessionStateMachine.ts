export type ProjectTasksSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksSessionStateMachine {
  private allowedTransitions: Record<ProjectTasksSessionState, ProjectTasksSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksSessionState, to: ProjectTasksSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksSessionState, to: ProjectTasksSessionState): ProjectTasksSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksSession: " + from + " -> " + to);
    }
    return to;
  }
}
