export type AiMemoryMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemoryMappingStateMachine {
  private allowedTransitions: Record<AiMemoryMappingState, AiMemoryMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemoryMappingState, to: AiMemoryMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemoryMappingState, to: AiMemoryMappingState): AiMemoryMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemoryMapping: " + from + " -> " + to);
    }
    return to;
  }
}
