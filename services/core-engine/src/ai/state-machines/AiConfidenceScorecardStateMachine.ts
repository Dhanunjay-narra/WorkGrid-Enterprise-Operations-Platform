export type AiConfidenceScorecardState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class AiConfidenceScorecardStateMachine {
  private validTransitions: Record<AiConfidenceScorecardState, AiConfidenceScorecardState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: AiConfidenceScorecardState, next: AiConfidenceScorecardState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: AiConfidenceScorecardState, next: AiConfidenceScorecardState): AiConfidenceScorecardState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for AiConfidenceScorecard: from " + current + " to " + next);
    }
    return next;
  }
}
