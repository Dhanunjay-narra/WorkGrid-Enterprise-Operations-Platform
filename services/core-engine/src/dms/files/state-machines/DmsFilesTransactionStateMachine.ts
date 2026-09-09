export type DmsFilesTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesTransactionStateMachine {
  private allowedTransitions: Record<DmsFilesTransactionState, DmsFilesTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesTransactionState, to: DmsFilesTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesTransactionState, to: DmsFilesTransactionState): DmsFilesTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
