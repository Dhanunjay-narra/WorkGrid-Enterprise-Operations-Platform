export type CrmDealsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsMappingStateMachine {
  private allowedTransitions: Record<CrmDealsMappingState, CrmDealsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsMappingState, to: CrmDealsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsMappingState, to: CrmDealsMappingState): CrmDealsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
