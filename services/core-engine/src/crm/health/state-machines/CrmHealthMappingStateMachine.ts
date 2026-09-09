export type CrmHealthMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthMappingStateMachine {
  private allowedTransitions: Record<CrmHealthMappingState, CrmHealthMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthMappingState, to: CrmHealthMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthMappingState, to: CrmHealthMappingState): CrmHealthMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthMapping: " + from + " -> " + to);
    }
    return to;
  }
}
