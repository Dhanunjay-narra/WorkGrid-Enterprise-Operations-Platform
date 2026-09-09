export type ProjectRisksEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksEventStateMachine {
  private allowedTransitions: Record<ProjectRisksEventState, ProjectRisksEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksEventState, to: ProjectRisksEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksEventState, to: ProjectRisksEventState): ProjectRisksEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksEvent: " + from + " -> " + to);
    }
    return to;
  }
}
