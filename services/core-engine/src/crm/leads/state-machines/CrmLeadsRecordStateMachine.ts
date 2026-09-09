export type CrmLeadsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsRecordStateMachine {
  private allowedTransitions: Record<CrmLeadsRecordState, CrmLeadsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsRecordState, to: CrmLeadsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsRecordState, to: CrmLeadsRecordState): CrmLeadsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
