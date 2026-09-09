export type ProjectEpicsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsPolicyStateMachine {
  private allowedTransitions: Record<ProjectEpicsPolicyState, ProjectEpicsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsPolicyState, to: ProjectEpicsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsPolicyState, to: ProjectEpicsPolicyState): ProjectEpicsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
