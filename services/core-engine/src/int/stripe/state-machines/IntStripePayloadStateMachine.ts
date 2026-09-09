export type IntStripePayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripePayloadStateMachine {
  private allowedTransitions: Record<IntStripePayloadState, IntStripePayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripePayloadState, to: IntStripePayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripePayloadState, to: IntStripePayloadState): IntStripePayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripePayload: " + from + " -> " + to);
    }
    return to;
  }
}
