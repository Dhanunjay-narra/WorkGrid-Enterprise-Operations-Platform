export type ProjectEpicsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsTransactionStateMachine {
  private allowedTransitions: Record<ProjectEpicsTransactionState, ProjectEpicsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsTransactionState, to: ProjectEpicsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsTransactionState, to: ProjectEpicsTransactionState): ProjectEpicsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
