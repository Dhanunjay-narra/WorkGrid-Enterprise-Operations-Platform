export type ProjectTasksPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksPolicyStateMachine {
  private allowedTransitions: Record<ProjectTasksPolicyState, ProjectTasksPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksPolicyState, to: ProjectTasksPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksPolicyState, to: ProjectTasksPolicyState): ProjectTasksPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
