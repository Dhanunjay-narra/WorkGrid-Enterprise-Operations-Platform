export type DmsSignaturesPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsSignaturesPolicyStateMachine {
  private allowedTransitions: Record<DmsSignaturesPolicyState, DmsSignaturesPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsSignaturesPolicyState, to: DmsSignaturesPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsSignaturesPolicyState, to: DmsSignaturesPolicyState): DmsSignaturesPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsSignaturesPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
