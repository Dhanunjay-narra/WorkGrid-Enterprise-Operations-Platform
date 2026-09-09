export type ProjectSprintsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsTransactionStateMachine {
  private allowedTransitions: Record<ProjectSprintsTransactionState, ProjectSprintsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsTransactionState, to: ProjectSprintsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsTransactionState, to: ProjectSprintsTransactionState): ProjectSprintsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
