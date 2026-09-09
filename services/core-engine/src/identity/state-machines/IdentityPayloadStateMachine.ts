export type IdentityPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentityPayloadStateMachine {
  private allowedTransitions: Record<IdentityPayloadState, IdentityPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentityPayloadState, to: IdentityPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentityPayloadState, to: IdentityPayloadState): IdentityPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentityPayload: " + from + " -> " + to);
    }
    return to;
  }
}
