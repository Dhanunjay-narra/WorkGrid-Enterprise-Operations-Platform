export type SecurityPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SecurityPayloadStateMachine {
  private allowedTransitions: Record<SecurityPayloadState, SecurityPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SecurityPayloadState, to: SecurityPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SecurityPayloadState, to: SecurityPayloadState): SecurityPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SecurityPayload: " + from + " -> " + to);
    }
    return to;
  }
}
