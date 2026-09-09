export type DmsOcrPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrPolicyStateMachine {
  private allowedTransitions: Record<DmsOcrPolicyState, DmsOcrPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrPolicyState, to: DmsOcrPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrPolicyState, to: DmsOcrPolicyState): DmsOcrPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
