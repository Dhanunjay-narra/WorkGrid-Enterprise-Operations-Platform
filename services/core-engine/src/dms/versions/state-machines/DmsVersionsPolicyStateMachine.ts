export type DmsVersionsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsPolicyStateMachine {
  private allowedTransitions: Record<DmsVersionsPolicyState, DmsVersionsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsPolicyState, to: DmsVersionsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsPolicyState, to: DmsVersionsPolicyState): DmsVersionsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
