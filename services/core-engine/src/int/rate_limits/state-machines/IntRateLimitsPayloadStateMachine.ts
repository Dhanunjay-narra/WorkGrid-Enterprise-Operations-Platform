export type IntRateLimitsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsPayloadStateMachine {
  private allowedTransitions: Record<IntRateLimitsPayloadState, IntRateLimitsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsPayloadState, to: IntRateLimitsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsPayloadState, to: IntRateLimitsPayloadState): IntRateLimitsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
