export type CrmHealthRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthRecordStateMachine {
  private allowedTransitions: Record<CrmHealthRecordState, CrmHealthRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthRecordState, to: CrmHealthRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthRecordState, to: CrmHealthRecordState): CrmHealthRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthRecord: " + from + " -> " + to);
    }
    return to;
  }
}
