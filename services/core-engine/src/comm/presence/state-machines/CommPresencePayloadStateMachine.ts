export type CommPresencePayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresencePayloadStateMachine {
  private allowedTransitions: Record<CommPresencePayloadState, CommPresencePayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresencePayloadState, to: CommPresencePayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresencePayloadState, to: CommPresencePayloadState): CommPresencePayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresencePayload: " + from + " -> " + to);
    }
    return to;
  }
}
