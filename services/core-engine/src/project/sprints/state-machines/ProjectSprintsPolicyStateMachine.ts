export type ProjectSprintsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsPolicyStateMachine {
  private allowedTransitions: Record<ProjectSprintsPolicyState, ProjectSprintsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsPolicyState, to: ProjectSprintsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsPolicyState, to: ProjectSprintsPolicyState): ProjectSprintsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
