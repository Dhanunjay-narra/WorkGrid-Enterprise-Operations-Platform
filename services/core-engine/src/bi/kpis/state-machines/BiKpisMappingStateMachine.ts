export type BiKpisMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisMappingStateMachine {
  private allowedTransitions: Record<BiKpisMappingState, BiKpisMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisMappingState, to: BiKpisMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisMappingState, to: BiKpisMappingState): BiKpisMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisMapping: " + from + " -> " + to);
    }
    return to;
  }
}
