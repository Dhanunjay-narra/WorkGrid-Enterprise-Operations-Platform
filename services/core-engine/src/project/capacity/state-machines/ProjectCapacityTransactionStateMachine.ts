export type ProjectCapacityTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectCapacityTransactionStateMachine {
  private allowedTransitions: Record<ProjectCapacityTransactionState, ProjectCapacityTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectCapacityTransactionState, to: ProjectCapacityTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectCapacityTransactionState, to: ProjectCapacityTransactionState): ProjectCapacityTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectCapacityTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
