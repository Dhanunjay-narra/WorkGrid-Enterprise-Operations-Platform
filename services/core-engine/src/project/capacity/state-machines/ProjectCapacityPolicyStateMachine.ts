export type ProjectCapacityPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectCapacityPolicyStateMachine {
  private allowedTransitions: Record<ProjectCapacityPolicyState, ProjectCapacityPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectCapacityPolicyState, to: ProjectCapacityPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectCapacityPolicyState, to: ProjectCapacityPolicyState): ProjectCapacityPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectCapacityPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
