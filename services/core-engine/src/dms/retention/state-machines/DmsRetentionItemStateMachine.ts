export type DmsRetentionItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionItemStateMachine {
  private allowedTransitions: Record<DmsRetentionItemState, DmsRetentionItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionItemState, to: DmsRetentionItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionItemState, to: DmsRetentionItemState): DmsRetentionItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionItem: " + from + " -> " + to);
    }
    return to;
  }
}
