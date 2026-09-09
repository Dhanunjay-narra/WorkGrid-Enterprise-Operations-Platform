export type AiMemoryNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemoryNodeStateMachine {
  private allowedTransitions: Record<AiMemoryNodeState, AiMemoryNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemoryNodeState, to: AiMemoryNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemoryNodeState, to: AiMemoryNodeState): AiMemoryNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemoryNode: " + from + " -> " + to);
    }
    return to;
  }
}
