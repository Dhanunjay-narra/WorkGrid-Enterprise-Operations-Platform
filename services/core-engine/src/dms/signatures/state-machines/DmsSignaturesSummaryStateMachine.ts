export type DmsSignaturesSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsSignaturesSummaryStateMachine {
  private allowedTransitions: Record<DmsSignaturesSummaryState, DmsSignaturesSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsSignaturesSummaryState, to: DmsSignaturesSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsSignaturesSummaryState, to: DmsSignaturesSummaryState): DmsSignaturesSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsSignaturesSummary: " + from + " -> " + to);
    }
    return to;
  }
}
