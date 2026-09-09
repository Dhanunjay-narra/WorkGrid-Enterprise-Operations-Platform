export type CrmContactsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsRecordStateMachine {
  private allowedTransitions: Record<CrmContactsRecordState, CrmContactsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsRecordState, to: CrmContactsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsRecordState, to: CrmContactsRecordState): CrmContactsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
