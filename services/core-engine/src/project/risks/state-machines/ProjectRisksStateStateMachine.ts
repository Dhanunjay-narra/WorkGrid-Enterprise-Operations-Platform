export type ProjectRisksStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksStateStateMachine {
  private allowedTransitions: Record<ProjectRisksStateState, ProjectRisksStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksStateState, to: ProjectRisksStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksStateState, to: ProjectRisksStateState): ProjectRisksStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksState: " + from + " -> " + to);
    }
    return to;
  }
}
