export type AiMemoryProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemoryProfileStateMachine {
  private allowedTransitions: Record<AiMemoryProfileState, AiMemoryProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemoryProfileState, to: AiMemoryProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemoryProfileState, to: AiMemoryProfileState): AiMemoryProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemoryProfile: " + from + " -> " + to);
    }
    return to;
  }
}
