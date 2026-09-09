export type AiRagMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagMappingStateMachine {
  private allowedTransitions: Record<AiRagMappingState, AiRagMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagMappingState, to: AiRagMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagMappingState, to: AiRagMappingState): AiRagMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagMapping: " + from + " -> " + to);
    }
    return to;
  }
}
