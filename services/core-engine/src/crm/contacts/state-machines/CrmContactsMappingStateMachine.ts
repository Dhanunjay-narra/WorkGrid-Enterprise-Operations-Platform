export type CrmContactsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsMappingStateMachine {
  private allowedTransitions: Record<CrmContactsMappingState, CrmContactsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsMappingState, to: CrmContactsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsMappingState, to: CrmContactsMappingState): CrmContactsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
