export type CrmAccountsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsMappingStateMachine {
  private allowedTransitions: Record<CrmAccountsMappingState, CrmAccountsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsMappingState, to: CrmAccountsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsMappingState, to: CrmAccountsMappingState): CrmAccountsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
