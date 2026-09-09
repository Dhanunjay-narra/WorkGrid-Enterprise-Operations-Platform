export type SupportSlaMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSlaMappingStateMachine {
  private allowedTransitions: Record<SupportSlaMappingState, SupportSlaMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSlaMappingState, to: SupportSlaMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSlaMappingState, to: SupportSlaMappingState): SupportSlaMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSlaMapping: " + from + " -> " + to);
    }
    return to;
  }
}
