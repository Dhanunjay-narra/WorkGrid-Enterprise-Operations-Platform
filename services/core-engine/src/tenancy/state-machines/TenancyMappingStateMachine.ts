export type TenancyMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class TenancyMappingStateMachine {
  private allowedTransitions: Record<TenancyMappingState, TenancyMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: TenancyMappingState, to: TenancyMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: TenancyMappingState, to: TenancyMappingState): TenancyMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for TenancyMapping: " + from + " -> " + to);
    }
    return to;
  }
}
