export type CrmContactsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsPayloadStateMachine {
  private allowedTransitions: Record<CrmContactsPayloadState, CrmContactsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsPayloadState, to: CrmContactsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsPayloadState, to: CrmContactsPayloadState): CrmContactsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
