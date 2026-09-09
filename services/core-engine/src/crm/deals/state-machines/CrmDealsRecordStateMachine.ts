export type CrmDealsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsRecordStateMachine {
  private allowedTransitions: Record<CrmDealsRecordState, CrmDealsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsRecordState, to: CrmDealsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsRecordState, to: CrmDealsRecordState): CrmDealsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
