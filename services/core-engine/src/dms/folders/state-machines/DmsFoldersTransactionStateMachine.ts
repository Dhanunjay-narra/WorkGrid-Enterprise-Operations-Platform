export type DmsFoldersTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersTransactionStateMachine {
  private allowedTransitions: Record<DmsFoldersTransactionState, DmsFoldersTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersTransactionState, to: DmsFoldersTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersTransactionState, to: DmsFoldersTransactionState): DmsFoldersTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
