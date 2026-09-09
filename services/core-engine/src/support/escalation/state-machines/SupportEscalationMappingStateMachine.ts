export type SupportEscalationMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationMappingStateMachine {
  private allowedTransitions: Record<SupportEscalationMappingState, SupportEscalationMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationMappingState, to: SupportEscalationMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationMappingState, to: SupportEscalationMappingState): SupportEscalationMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationMapping: " + from + " -> " + to);
    }
    return to;
  }
}
