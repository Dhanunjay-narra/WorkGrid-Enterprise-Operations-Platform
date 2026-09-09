export type CrmHealthPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthPayloadStateMachine {
  private allowedTransitions: Record<CrmHealthPayloadState, CrmHealthPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthPayloadState, to: CrmHealthPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthPayloadState, to: CrmHealthPayloadState): CrmHealthPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthPayload: " + from + " -> " + to);
    }
    return to;
  }
}
