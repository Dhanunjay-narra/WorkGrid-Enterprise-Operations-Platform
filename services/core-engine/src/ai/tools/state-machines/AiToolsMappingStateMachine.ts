export type AiToolsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsMappingStateMachine {
  private allowedTransitions: Record<AiToolsMappingState, AiToolsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsMappingState, to: AiToolsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsMappingState, to: AiToolsMappingState): AiToolsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
