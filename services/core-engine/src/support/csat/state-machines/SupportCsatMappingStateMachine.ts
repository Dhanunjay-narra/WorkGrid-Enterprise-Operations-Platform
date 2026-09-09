export type SupportCsatMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatMappingStateMachine {
  private allowedTransitions: Record<SupportCsatMappingState, SupportCsatMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatMappingState, to: SupportCsatMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatMappingState, to: SupportCsatMappingState): SupportCsatMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatMapping: " + from + " -> " + to);
    }
    return to;
  }
}
